//import {ethers} from 'ethers';
//import ethers from 'ethers';
import * as ethers from 'ethers';

import deploy from './deploy';
import addContract from './addContract';
import "./index.scss";

let contracts = 0;
async function newContract() {
  const beneficiary = document.getElementById("beneficiary").value;
  const arbiter = document.getElementById("arbiter").value;
  const value = ethers.BigNumber.from(document.getElementById("ether").value);
//  const value = ethers.BigNumber.from(document.getElementById("ether").value) /1e18 ;
//  const value =  { BigNumber: "1000000000000000000" }
//  const value = ethers.utils.parseEther.from(document.getElementById("ether").value);
  console.log(value);
  const contract = await deploy(arbiter, beneficiary, value);
  addContract(++contracts, contract, arbiter, beneficiary, value);
}

document.getElementById("deploy").addEventListener("click", newContract);
