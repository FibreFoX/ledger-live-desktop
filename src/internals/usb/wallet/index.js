// @flow

import CommNodeHid from '@ledgerhq/hw-transport-node-hid'

import getAllAccounts, { verifyAddress } from './accounts'

async function getAllAccountsByCoinType({ pathDevice, coinType, currentAccounts, onProgress }) {
  const transport = await CommNodeHid.open(pathDevice)

  // 1: BTC Testnet
  if (coinType === 1) {
    return getAllAccounts({ coinType, transport, currentAccounts, onProgress })
  }

  throw new Error('Invalid coinType')
}

export default (sendEvent: Function) => ({
  getAccounts: async ({
    pathDevice,
    coinType,
    currentAccounts,
  }: {
    pathDevice: string,
    coinType: number,
    currentAccounts: Array<string>,
  }) => {
    sendEvent(
      'wallet.getAccounts.start',
      {
        pid: process.pid,
      },
      { kill: false },
    )

    try {
      const data = await getAllAccountsByCoinType({
        pathDevice,
        coinType,
        currentAccounts,
        onProgress: progress => sendEvent('wallet.getAccounts.progress', progress, { kill: false }),
      })

      sendEvent('wallet.getAccounts.success', data)
    } catch (err) {
      sendEvent('wallet.getAccounts.fail', err.stack || err)
    }
  },
  verifyAddress: async ({ pathDevice, path }: { pathDevice: string, path: string }) => {
    const transport = await CommNodeHid.open(pathDevice)

    try {
      await verifyAddress({ transport, path })

      sendEvent('wallet.verifyAddress.success')
    } catch (err) {
      sendEvent('wallet.verifyAddress.fail')
    }
  },
})
