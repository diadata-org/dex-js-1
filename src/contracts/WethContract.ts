// Doesn't use ContractEvent on purpose since the mapping of events in typechain is broken
// TODO: Update when typechain fix the issue
import { Weth } from './gen/Weth'
import { ExtendedContract } from './types'

export type WethContract = ExtendedContract<Weth>
