import{Page} from '@playwright/test';
import { utilElementLocator } from '../utils/UtilElementLocator';
import { createLogger, type Logger } from '../utils/logger';


export abstract class BasePage {
        protected readonly page:Page;
        protected readonly el:utilElementLocator;
        protected readonly log:Logger;

    protected constructor(page:Page, scope: string){
        this.page=page;
        this.el=new utilElementLocator(page, scope);
        this.log=createLogger(scope);
    }
    protected async goto(relativePath: string): Promise<void> {
        await this.page.goto(relativePath);
        await this.page.waitForLoadState('domcontentloaded');
}

}