import { test, expect } from '@playwright/test';

/**
 * Data extracted from your Excel file
 */
const testData = [
  {
    id: 'Pos_Fun_0001',
    name: 'Convert a simple daily usage sentence',
    input: 'mama panthi yanavaa',
    expected: 'මම පන්ති යනවා'
  },
  {
     id: 'Pos_Fun_0002',
    name: 'Simple food request',
    input: 'mata kiri oonee',
    expected: 'මට කිරි ඕනෑ'

  },
  {
    id: 'Pos_Fun_0003',
    name: 'Convert a simple imperative command sentence',
    input: 'dhakunata haerenna',
    expected: 'දකුනට හැරෙන්න'
  },
  {
    id: 'Pos_Fun_0004',
    name: 'Two activities connected',
    input: 'mama kaeema kannam saha passe naaginnam',
    expected: 'මම කෑම කන්නම් සහ පස්සේ නාගින්නම්'
  },

   {
    id: 'Pos_Fun_0005',
    name: 'Convert a compound sentence',
    input: 'mama bath kanavaa saha tea bonawaa.',
    expected: 'මම බත් කනවා සහ තේ බොනවා.'
  },

    {
    id: 'Pos_Fun_0006',
    name: 'Convert an imperative command sentence',
    input: 'eya poddak balanna.',
    expected: 'එය පොඩ්ඩක් බලන්න.'
  },
     {
    id: 'Pos_Fun_0007',
    name: 'Convert a complex sentence',
    input: 'ohu enna kiyala mama gedhara inne.',
    expected: 'ඔහු එන්න කියලා මම ගෙදර ඉන්නේ.'
  },
      {
    id: 'Pos_Fun_0008',
    name: 'Convert a present tense sentence',
    input: 'aeya dan lecture ahagena inne.',
    expected: 'ඇය දැන් lecture අහගෙන ඉන්නේ.'
  },
    {
    id: 'Pos_Fun_0009',
    name: 'Convert a past tense sentence',
    input: 'ohu kalin call ekak gaththa.',
    expected: 'ඔහු කලින් call එකක් ගත්ත.'
  },
  {
    id: 'Pos_Fun_0010',
    name: 'Convert a future tense sentence',
    input: 'api heta meeting ekata yamu.',
    expected: 'අපි හෙට meeting එකට යමු.'
  },

   {
    id: 'Pos_Fun_0011',
    name: 'Convert a negative sentence',
    input: 'mata adha office yanna bae.',
    expected: 'මට අද office යන්න බැහැ.'
  },
{
    id: 'Pos_Fun_0012',
    name: 'Convert a polite request sentence',
    input: 'puluvannam mata file eka evanna.',
    expected: 'පුළුවන්නම් මට file එක එවන්න.'
  },
{
    id: 'Pos_Fun_0013',
    name: 'Convert an informal conversational question',
    input: 'hari lassanayi neh?',
    expected: 'හරි ලස්සනයි නේ?'
  },
  {
    id: 'Pos_Fun_0014',
    name: 'Convert a plural pronoun sentence',
    input: 'teacher class ekata enavaa.',
    expected: 'හරි ලස්සනයි නේ?'
  },
    {
    id: 'Pos_Fun_0015',
    name: 'Convert a mixed Singlish and English sentence',
    input: 'ohuta document tika upload karanna thiyenavaa.',
    expected: 'teacher class එකට එනවා.'
  },
     {
    id: 'Pos_Fun_0016',
    name: 'Convert a sentence containing a place name',
    input: 'mama Colombo valata travel karanavaa.',
    expected: 'මම Colombo වලට travel කරනවා.'
  },
   {
    id: 'Pos_Fun_0017',
    name: 'Convert a sentence with time format',
    input: 'movie eka 10.00 AM ta patan gannavaa.',
    expected: 'movie එක 10.00 AMට පටන් ගන්නවා.'
  },

  {
    id: 'Pos_Fun_0018',
    name: 'Convert a sentence with currency value',
    input: 'photo eka Rs. 1500 yi.',
    expected: 'photo එක Rs. 1500යි.'
  },

   {
    id: 'Pos_Fun_0019',
    name: 'Convert a sentence with extra spaces',
    input: 'ohu practice yanna hadhanavaa.',
    expected: 'ඔහු practice යන්න හදනවා.'
  },

  {
    id: 'Pos_Fun_0020',
    name: 'Convert a multi-line input sentence',
    input: 'mama gedhara inne.oyaa enavadha?',
    expected: 'මම ගෙදර ඉන්නේ.ඔයා එනවද?'
  },
  
  {
    id: 'Pos_Fun_0021',
    name: 'Convert a future plan sentence',
    input: 'api next month party ekak plan karanavaa.',
    expected: 'අපි next mont party එකක් plan කරනවා.'
  },

  {
    id: 'Pos_Fun_0022',
    name: 'Convert a sentence with repeated emphasis words',
    input: 'eka hari hari lassanayi.',
    expected: 'එක හරි හරි ලස්සනයි.'
  },

  {
    id: 'Pos_Fun_0023',
    name: 'Convert a long paragraph-style input',
    input: 'api adha university eke lecture ekak thibuna. eka godak vatina eka nisa api hamom ahagena inne. passe api gedhara yanavaa',
    expected: 'අපි අද university එකේ lecture එකක් තිබුණා. එක ගොඩක් වටිනා එක නිසා අපි හැමෝම අහගෙන ඉන්නේ. පස්සේ අපි ගෙදර යනවා'
  },
  

   {
    id: 'Pos_Fun_0024',
    name: 'Convert an informal exclamation',
    input: 'supiri wadak machan!',
    expected: ' සුපිරි වැඩක් මචන්!'
  },

   {
    id: 'Neg_Fun_0001',
    name: 'mamaofficeyanavaa',
    input: 'Incorrect or unreadable Sinhala output',
    expected: ' මමඔෆ්ෆිcඑයනවා'
  },

   {
    id: 'Neg_Fun_0002',
    name: 'Handle sentence with heavy spelling mistakes',
    input: 'mam offce ynav',
    expected: ' mam ඔෆ්ෆcඑ ය්නව්'
  },

  {
    id: 'Neg_Fun_0003',
    name: 'Handle mixed slang and spelling errors',
    input: 'adoo mam offce ynne na bn',
    expected: ' අඩෝ mam ඔෆ්ෆcඑ ය්න්නෙ න බ්න්'
  },

   {
    id: 'Neg_Fun_0004',
    name: 'Handle sentence without grammatical structure',
    input: 'mama yanava office',
    expected: ' අඩෝ mam ඔෆ්ෆcඑ ය්න්නෙ න බ්න්'
  },
  

  {
    id: 'Neg_Fun_0005',
    name: 'Handle sentence without grammatical structure',
    input: 'mama iiyee yanna',
    expected: ' මම ඊයේ යන්න'
  },
  
 {
    id: 'Neg_Fun_0006',
    name: 'Handle repeated unnecessary characters',
    input: 'mamaaaa officeeee yanavaaa',
    expected: 'මමාආ ඔෆ්ෆිcඒඒ යනවාඅ'
  },
  
  {
    id: 'Neg_Fun_0007',
    name: 'Handle mixed English dominance',
    input: 'mam office yanna late because traffic very heavy',
    expected: 'මමාආ ඔෆ්ෆිcඒඒ යනවාඅ'
  },
  
  {
    id: 'Neg_Fun_0008',
    name: 'Handle multi-line broken sentence',
    input: 'mama gedhara\n\nyanavaa\n\nadha',
    expected: 'මම ගෙදර\n\න්යනවා\n\නද'
  },

   {
    id: 'Neg_Fun_0009',
    name: 'Handle numeric noise in sentence',
    input: 'mama 123 office yanavaa',
    expected: 'මම 123 office යනවා'
  },

   {
    id: 'Neg_Fun_0010',
    name: 'Handle unsupported chat shorthand',
    input: 'u r ok?',
    expected: 'උ ර් ඔක්?'
  },
  


  
  


  

];

test.describe('IT3040 Assignment: Swift Translator Automation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
  });

  for (const scenario of testData) {

    // ================= UI TEST =================
    if (scenario.id === 'Pos_UI_0001') {

      test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
        const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
        const outputArea = page.locator('div.bg-slate-50');

        await inputArea.fill('Ammee mama bath kaevaa');
        await page.waitForTimeout(2000);

        await page.getByText('🗑️ Clear').click();

        await expect(inputArea).toHaveValue('');
        await expect(outputArea).toHaveText('');

        console.log(`${scenario.id}: UI Clear Successful - Both fields are empty.`);
      });

    } 
    // ================= FUNCTIONAL TEST =================
    else {

      test(`${scenario.id}: ${scenario.name}`, async ({ page }, testInfo) => {
        const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
        const outputArea = page.locator('div.bg-slate-50');

        await inputArea.fill(scenario.input);
        await page.waitForTimeout(2000);

        const actualOutput = await outputArea.innerText();

        console.log(`TC ID: ${scenario.id}`);
        console.log(`Actual Output: ${actualOutput}`);

        testInfo.annotations.push({
          type: 'Actual Output (Sinhala)',
          description: actualOutput
        });

        await expect(outputArea).toHaveText(scenario.expected);
      });

    }
  }
});
