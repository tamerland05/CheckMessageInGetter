import "@stdlib/deploy";
struct S {
    a: Int;
    b: Int;
}
message SetIdAndData {
    id: Int;
    data: Cell;
}
contract Test with Deployable {
    id: Int as uint32;
    anotherData: Cell;
    init(idAndData: SetIdAndData) {
        self.id = idAndData.id;
        self.anotherData = idAndData.data;
    }
    receive(msg: SetIdAndData) {
        self.id = msg.id;
        self.anotherData = msg.data;
    }
    get fun testGetter(): Int {
        return 1;
    }
    get fun test_getter(): Int {
        return 2;
    }
    get fun Test_getter(): Int {
        return 3;
    }
    get fun contractData(): Test {
        return self;
    }
    get fun structAsInput(s: S): S {
        return s;
    }

    get fun messageAsInput1(m: SetIdAndData): Int {
        return m.id;
    }

    get fun messageAsInput2(m: SetIdAndData): SetIdAndData {
        return m;
    }

    get fun messageAsInput3(m: SetIdAndData): Address {
        let init = initOf Test(m);
        return contractAddressExt(0, init.code, init.data);
    }

    get fun contractAsInput(test: Test): Test {
        return test;
    }
}