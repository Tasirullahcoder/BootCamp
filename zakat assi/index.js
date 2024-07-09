#! /usr/bin/env node

import inquirer from 'inquirer'
import chalk from 'chalk'

// Zakat is 2.5%
// The total amount you have

const NisabThreshold = 1427901 // in PKR.

const calculateZakat = (income) => {
  if (income >= NisabThreshold) {
    const zakatPrice = (income * 2.5) / 100
    console.log(
      chalk.green(
        `You have to pay the amount ${zakatPrice} as Zakat in total of ${income}`
      )
    )
  } else {
    console.log(
      chalk.red(
        `Your income is less then ${NisabThreshold}. So your not qualified for Zakat.`
      )
    )
  }
}

console.log(
  chalk.blue(
    `Note :  Zakat, one of Islam’s five pillars, is mandatory for all eligible Muslims who meet the Nisab values. Nisab is the minimum net capital required for an individual to qualify for Zakat payment, set at the equivalent of 87.48 grams (7.5 tola) of gold and 612.36 grams (52.5 tola) of silver. The nisab value for gold is  ${NisabThreshold} according to my knoledge.`
  )
)
const answer = await inquirer.prompt([
  {
    type: 'Number',
    name: 'cash',
    message: 'Enter the amount of cash you have at home or bank accounts : ',
  },
  {
    type: 'Number',
    name: 'gold',
    message: 'Enter the value of Gold you have : ',
  },
  {
    type: 'Number',
    name: 'silver',
    message: 'Enter the value of Silver you have :  ',
  },
  {
    type: 'Number',
    name: 'investment',
    message: 'Enter the value of investments and shares : ',
  },
  {
    type: 'Number',
    name: 'goods',
    message: 'Enter the value of goods in stock : ',
  },
  {
    type: 'Number',
    name: 'assets',
    message: 'Enter the value of all other assets : ',
  },
])

const { cash, gold, silver, investment, goods, assets } = answer
const total =
  Number(cash) +
  Number(gold) +
  Number(silver) +
  Number(investment) +
  Number(goods) +
  Number(assets)

calculateZakat(total)
