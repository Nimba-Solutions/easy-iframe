@IsTest
private class EasyIframeControllerTest {
    @IsTest
    static void testGetFieldValue() {
        Account testAccount = new Account(Name='Test Account');
        insert testAccount;
        
        Object result = easyIframeController.getFieldValue('Account', testAccount.Id, 'Name');
        
        System.assertEquals(testAccount.Name, (String) result);
    }
}