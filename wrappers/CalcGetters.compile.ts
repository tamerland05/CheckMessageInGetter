import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/calc_getters.tact',
    options: {
        debug: true,
    },
};