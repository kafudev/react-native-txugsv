import { NativeModules } from 'react-native';

type TxugsvType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Txugsv } = NativeModules;

export default Txugsv as TxugsvType;
