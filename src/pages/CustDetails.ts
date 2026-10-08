import{Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class CustDetails extends BasePage{

    static readonly Path='/app.html#';

    private readonly loggedUserName:Locator;
    private readonly loggedUserType:Locator;

    constructor(page:Page){
        super(page, 'custDetails');
        this.loggedUserName=page.locator('.logged-user-name');
        this.loggedUserType=page.locator('.logged-user-role');
    }

    async userData(): Promise<{ name: string[]; type: string[] }> {
    this.log.info("UserData");

    const name = await this.el.getAllTexts(this.loggedUserName);
    const type = await this.el.getAllTexts(this.loggedUserType);

    return {
        name,
        type
        };
       }
    }
