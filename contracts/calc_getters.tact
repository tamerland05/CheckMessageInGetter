import "./getters";

contract Test2 with Deployable {
    init() {}

    get fun calcTest(m: SetIdAndData): Address {
        let init = initOf Test(m);
        return contractAddressExt(0, init.code, init.data);
    }
}