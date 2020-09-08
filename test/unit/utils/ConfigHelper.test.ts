import { assert } from 'chai'
import { ConfigHelper } from '../../../src/lib'

describe('ConfigHelper', () => {
  it('should get config based on network name', () => {
    const network = 'rinkeby'
    const config = new ConfigHelper().getConfig(network)
    assert(config.network === network)
  })

  it('should get config based on network name, and add passed Infura ID', () => {
    const network = 'rinkeby'
    const infuraId = 'helloInfura'
    const config = new ConfigHelper().getConfig(network, infuraId)
    assert(config.nodeUri.includes(infuraId))
  })

  it('should get config based on chain ID', () => {
    const network = 4
    const config = new ConfigHelper().getConfig(network)
    assert(config.chainId === network)
  })

  it('should return nothing with unknown network', () => {
    const network = 'blabla'
    const config = new ConfigHelper().getConfig(network)
    assert(config === null)
  })
})
