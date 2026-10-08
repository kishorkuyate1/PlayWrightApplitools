import {expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class FianaceOverview extends BasePage{
   static readonly Path='/app.html#';
   private readonly totalBal:Locator;
   private readonly CreditAvai:Locator;
   private readonly dueToday:Locator;

   constructor(page:Page){
    super(page, 'FinanceData');
    this.totalBal=page.locator("//div[@class='balance-value']/span[1]");
    this.CreditAvai=page.locator("//div[@class='balance']/div[@class='balance-value']");
    this.dueToday=page.locator(".balance-value.danger");
   };

   async financeData(): Promise<{tBal: string[], cAva : string[], dTod: string[] }>{
    this.log.info("Finance");
    const tBal=await this.el.getAllTexts(this.totalBal);
    const cAva= await this.el.getAllTexts(this.CreditAvai);
    const dTod=await this.el.getAllTexts(this.dueToday);

    return{
        tBal,
        cAva,
        dTod
    };
   };
    
};