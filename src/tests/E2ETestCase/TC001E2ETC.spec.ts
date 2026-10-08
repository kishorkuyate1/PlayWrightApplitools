import { test, expect } from "../../fixtures/test-base";import {assertEnv, requireEnv} from '../../config/env';
import { credentials } from '../../config/credentials';
import { DataGenerator } from '../../utils/DataGenerator';
import { createLogger } from '../../utils/logger';
import { visualStep } from '../../utils/VisualStep';

const log=createLogger('E2E Verify the Cust Details');

test.describe('@p0 @Regression E2E @Cust Details (env-driven)',()=>{

    test.beforeEach(async({loginPage})=>{
    log.info(`Step 1: logging in as ${credentials.standardUser} (from .env)`);
    await loginPage.open();
    await loginPage.loginAs(credentials.standardUser, credentials.password);
    });

  test("Should Fetch the Cust details", async ({ page, custDetails }) => {

    let name: string[];
    let type: string[];

    await visualStep(page, "Get Customer Details", async () => {

        log.info("Step 2: Fetching customer details");

        const data = await custDetails.userData();

        name = data.name;
        type = data.type;

        log.info(`User Name: ${name}`);
        log.info(`User Type: ${type}`);
    });

    await visualStep(page, "Verify Customer Name", async () => {

        log.info("Step 3: Verifying customer name");

        expect(name[0]).toBe("Jack Gomez");

    });

    await visualStep(page, "Verify Customer Type", async () => {

        log.info("Step 4: Verifying customer type");

        expect(type[0]).toBe("Customer");

    });

});
});