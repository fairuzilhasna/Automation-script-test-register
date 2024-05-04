import {browser, $, expect} from '@wdio/globals'

describe('001 - FITUR REGISTER', () => {
    it('R001 - Isi formulir register dengan username yang sudah ada', async function () {
        await browser.url('https://id.wikipedia.org/w/index.php?title=Istimewa:Buat_akun&returnto=Istimewa%3ABeranda&returntoquery=source%3Dspecialwelcomesurvey');
        await $('#wpName2').setValue('Yuananana');
        await $('#wpPassword2').setValue('Akunwiki123');
        await $('#wpRetype').setValue('Akunwiki123');
        await $('#wpEmail').setValue('fairuzil_hasna@apps.ipb.ac.id')
        await $('#wpCreateaccount').click();

        const errorMessage = await $('[data-test="error"]');
        expect(errorMessage).toHaveText('Email already exists');
        });

    it('R002 - Isi formulir register dengan password dan konfirmasi password yang tidak cocok', async function () {
        await browser.url('https://id.wikipedia.org/w/index.php?title=Istimewa:Buat_akun&returnto=Istimewa%3ABeranda&returntoquery=source%3Dspecialwelcomesurvey');
        await $('#wpName2').setValue('Yuananana');
        await $('#wpPassword2').setValue('Akunwiki123');
        await $('#wpRetype').setValue('Akunwiki123');
        await $('#wpEmail').setValue('fairuzil_hasna@apps.ipb.ac.id')
        await $('#wpCreateaccount').click();

        const errorMessage = await $('[data-test="error"]');
        expect(errorMessage).toHaveText('Passwords do not match');
    })

    it('R003 - Isi formulir register dengan format email yang tidak valid', async function () {
        await browser.url('https://id.wikipedia.org/w/index.php?title=Istimewa:Buat_akun&returnto=Istimewa%3ABeranda&returntoquery=source%3Dspecialwelcomesurvey');
        await $('#wpName2').setValue('Yuananana');
        await $('#wpPassword2').setValue('Akunwiki123');
        await $('#wpRetype').setValue('Akunwiki123');
        await $('#wpEmail').setValue('wikihasna123123')
        await $('#wpCreateaccount').click();

        const errorMessage = await $('[data-test="error"]');
        expect(errorMessage).toHaveText('Invalid email format');
    });

    it('R004 - Isi formulir register dengan format email yang tidak valid', async function () {
        await browser.url('https://id.wikipedia.org/w/index.php?title=Istimewa:Buat_akun&returnto=Istimewa%3ABeranda&returntoquery=source%3Dspecialwelcomesurvey');
        await $('#wpName2').setValue('Yuananana@@@');
        await $('#wpPassword2').setValue('Akunwiki12345');
        await $('#wpRetype').setValue('Akunwiki12345');
        await $('#wpEmail').setValue('fairuzilhasna09@gmail.com')
        await $('#wpCreateaccount').click();

        const errorMessage = await $('[data-test="error"]');
        expect(errorMessage).toHaveText('Invalid email format');
    });
});