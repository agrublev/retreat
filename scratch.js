class Dima {
    constructor() {
        this.test = 52;
    }

    getDima() {
        return this.test;
    }
}

export { Dima };

const DimaExt = new Dima();
DimaExt.getDima();//?


let aaa = { as: 52, az: 23 };
aaa.as = 1111;
aaa.as//?

aaa = 2;
const myf = (tree = 0) => {
  console.log(tree);
};

myf();
const aa = (one,...two)=>{
    console.warn(one,"------",two);//?
};

aa(1,5,6,7,70);//?

const aa = (one, two, three) => {
    console.warn(one, two, three);
};

aa(1, 2, 3);


const aab = ({ name, email, id }) => {
    console.warn(one, two, three);
};
aab(response);

const aa = [1, 2, 3];

const { 1: z } = aa;
z;//

const props = {
    test: {
        another: {
            ess: 52
        }
    },
    zebra: 11,
    DONOTIMPORTTHIS: () => {
        console.error("rm -rf *");
    }
};

const {
    test: { another: { ess: zed } },
    zebra
} = props;
ess; //

// test//

const test = props.test;
test//

const a = "Test 52";
a.includes("52") //?
const arr = [1,5,6];
arr.includes(5) //?

const arr1 = [1, 2, 3];
const arr2 = [52, 23];

const arr3 = arr1.concat(arr2);
console.warn("-- Console ", arr3);

const arr4 = [...arr1, ...arr2];
console.warn(arr4);

const ob1 = { test: 52 };
const ob2 = {
    ...ob1,
    other: 52,
    zz: {
        additional: { ...ob1 } //?
    }
}; //?
ob2.test = 11; //?
ob1; //?
const ob52 = { ...ob1 };
const ob22 = Object.assign({}, ob1);
ob52.test = 1111;
ob52;//
ob1;//

const Dima = {test:52};

Dima.f = function() {
    seta(() => {
        console.log(this.test);//
    });
    seta(function(){
        console.log(this.test);//
    })
};

function seta(ff){
    ff();
}
let aa = 5;
Dima.f();
