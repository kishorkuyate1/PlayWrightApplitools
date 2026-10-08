import {test} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { createLogger } from '../utils/logger';

const log= createLogger('Login.spec');

test.describe('App Tools', ()=>{

let loginPage:LoginPage;
test.beforeEach(async({ page})=>{
    loginPage =new LoginPage(page);

    await test.step('Open Apptools LoginPage', async()=>{
    log.info('Opening the TTACart login page');
    await loginPage.open();
    });
});

test('Login With Valid User @p0', async()=>{

    await test.step('Login as Standard User' , async()=>{
    log.info('Logging in as standard_user');
    await loginPage.loginAs('standard_user', 'tta_secret');
    });
});

});