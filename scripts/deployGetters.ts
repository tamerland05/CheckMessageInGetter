import { beginCell, toNano } from '@ton/core';
import { Test } from '../wrappers/Getters';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const getters = provider.open(await Test.fromInit({$$type: 'SetIdAndData', id: 0n, data: beginCell().endCell()}));

    await getters.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(getters.address);

    const addr = await getters.getMessageAsInput3({$$type: 'SetIdAndData', id: 0n, data: beginCell().endCell()})
    console.log(addr)
}
