import {expect, Locator, Page} from '@playwright/test';
import {BasePage} from './BasePage';

export class LoginPage extends BasePage{
    static readonly PATH= '';

    private readonly userNameInput:Locator;
    private readonly userPassword:Locator;
    private readonly signBtn: Locator;

    constructor(page:Page) {
        super(page, 'Login');
        this.userNameInput = page.locator('#username');
        this.userPassword = page.locator('#password');
        this.signBtn = page.locator('#log-in');
    }

    async open(): Promise<void>{
        this.log.info("Open Login Page");
        await this.goto(LoginPage.PATH);
    }

    async loginAs(username:string, password: string) :Promise<void>{
        this.log.info(`loginAs ${username}`);
        await this.el.fill(this.userNameInput, username);
        await this.el.fill(this.userPassword, password);
        await this.el.click(this.signBtn);
    }
}
