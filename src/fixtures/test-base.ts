import{test as base, expect} from "@playwright/test"
import {CustDetails } from "../pages/CustDetails";
import{FianaceOverview} from "../pages/FianaceOverview";
import {LoginPage} from "../pages/LoginPage";
import {RecentTransaction} from '../pages/RecentTransaction';
import loginTestData from '../testdata/logintestdata.json'

type LoginRecord={
username:string;
password:string
}

const users= loginTestData as LoginRecord[];
const validUser= users.find(({username})=> username==='standard_user');
const invalidUser = users.find(({ username }) => username === 'locked_out_user');

if (!validUser || !invalidUser) {
    throw new Error('Required standard_user and locked_out_user test data is missing');
}

export type TestFixtures={
    loginPage:LoginPage;
    custDetails:CustDetails;
    fianaceOverview:FianaceOverview;
    recentTransaction:RecentTransaction
    validLogin: LoginPage;

}

export const test = base.extend<TestFixtures>({

        loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    custDetails:async({page},use)=>{
        await use(new CustDetails(page));
    },

    fianaceOverview:async({page},use)=>{
        await use(new FianaceOverview(page));
    },
    recentTransaction:async({page},use)=>{
        await use(new RecentTransaction(page));
    },
    validLogin: async ({ loginPage }, use) => {
        await loginPage.open();
        await loginPage.loginAs(
            validUser.username,
            validUser.password
        );
        await use(loginPage);
    }

});
export{expect};