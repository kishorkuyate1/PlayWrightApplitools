import { test, expect } from "../../fixtures/test-base";import {assertEnv, requireEnv} from '../../config/env';
import { credentials } from '../../config/credentials';
import { DataGenerator } from '../../utils/DataGenerator';
import { createLogger } from '../../utils/logger';
import { visualStep } from '../../utils/VisualStep';

const log=createLogger('E2E Verify the Financial Overview');

test.describe('@p1 @Regression E2E @Finanacial Details',()=>{
test.beforeEach(async({loginPage})=>{
    log.info(`Step 1: logging in as ${credentials.standardUser} (from .env)`);
    await loginPage.open();
    await loginPage.loginAs(credentials.standardUser, credentials.password);
    });

    test('Should Fetch the Financial Data', async({page, fianaceOverview})=>{
        let tBal: string[];
        let cAva: string[];
        let dTod: string[];

        await visualStep(page, "Get Fian Data", async()=>{
        log.info("Step 2: Fetch the Deatsils");
        const data=  await fianaceOverview.financeData();
        tBal=data.tBal;
        cAva=data.cAva;
        dTod=data.dTod;
     });
      await visualStep(page, "Verify Finance Data Name", async () => {
     
             log.info("Step 3: Verifying customer name");
     
             expect(tBal[0]).toBe("$350");
             expect(cAva[0]).toBe("$17,800");
             expect(dTod[0]).toBe("$180");        
     
         });
    });
});