class Solution {
    public String convert(String s, int numRows) {
        int n = s.length();
        StringBuffer [] arr = new StringBuffer[numRows];
        for(int i =0; i<numRows; i++) arr[i] = new StringBuffer();

        int i=0;
        while(i<n){
            for(int in =0; in<numRows && i<n; in++){
                arr [in].append(s.charAt(i++));
            }
            for(int in = numRows-2; in>0 && i<n; in--){
                arr[in].append(s.charAt(i++));
            }
        }
        StringBuffer ans = new StringBuffer();
        for(StringBuffer el : arr){
            ans.append(el);
        }
        return ans.toString();
    }
}