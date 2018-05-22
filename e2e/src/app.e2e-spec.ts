import { JasAng2Page } from './app.po';

describe('JasAng2 App', () => {
    let page: JasAng2Page;

    beforeEach(() => {
        page = new JasAng2Page();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to JasAng2!');
    });
});
