import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export interface Transaction {
    status: string;
    date: string;
    description: string;
    category: string;
    amount: string;
}

export class RecentTransaction extends BasePage {

    static readonly Path = '/app.html#';

    private readonly getSingleRecord: Locator;
    private readonly getAllRecordsData: Locator;

    constructor(page: Page) {
        super(page, 'RecentTransaction');

        // Status text of transaction
        this.getSingleRecord = page.locator(
            "//tr/td[@class='nowrap']/span[2]"
        );

        // All transaction rows
        this.getAllRecordsData = page.locator(
            "table tbody tr"
        );
    }

    /**
     * Fetch all recent transactions
     */
    async getRecentTransactions(): Promise<Transaction[]> {

        this.log.info("Fetching all recent transactions");

        const transactions: Transaction[] = [];

        const rowCount = await this.getAllRecordsData.count();

        for (let i = 0; i < rowCount; i++) {

            const row = this.getAllRecordsData.nth(i);
            const cells = row.locator("td");

            const transaction: Transaction = {
                status: (await cells.nth(0).innerText()).trim(),
                date: (await cells.nth(1).innerText()).trim(),
                description: (await cells.nth(2).innerText()).trim(),
                category: (await cells.nth(3).innerText()).trim(),
                amount: (await cells.nth(4).innerText()).trim()
            };

            transactions.push(transaction);
        }

        return transactions;
    }

    /**
     * Fetch first transaction according to status
     */
    async getTransactionByStatus(
        status: string
    ): Promise<Transaction | null> {

        this.log.info(`Fetching transaction with status: ${status}`);

        const rowCount = await this.getAllRecordsData.count();

        for (let i = 0; i < rowCount; i++) {

            const row = this.getAllRecordsData.nth(i);

            const cells = row.locator("td");

            const currentStatus =
                (await cells.nth(0).innerText()).trim();

            if (currentStatus === status) {

                const transaction: Transaction = {
                    status: currentStatus,
                    date: (await cells.nth(1).innerText()).trim(),
                    description: (await cells.nth(2).innerText()).trim(),
                    category: (await cells.nth(3).innerText()).trim(),
                    amount: (await cells.nth(4).innerText()).trim()
                };

                this.log.info(
                    `Transaction found with status: ${status}`
                );

                return transaction;
            }
        }

        this.log.info(
            `No transaction found with status: ${status}`
        );

        return null;
    }
}