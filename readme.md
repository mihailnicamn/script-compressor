### Forked from lz-string
### i took from lz-string the approach with best compression ratio (funny also that uses utf16 chinese characters 😂)
##### kick the bench.js and check the results 

### i saw the base64 approach for code "hiding"/obfuscation and binary loading and so on
### with this compression + an compiled script (all in 1 file) would be nice not really necessary 👍 (against that it's funny that encodes in chinese 😂)



### My results with the basic 10k lines of i+1 😅
``` Test file size: 89481 ```
``` Compressed file size: 12961``` 
``` Compression ratio: 0.14``` 
``` Space saved: 85.52%``` 
``` Vanilla time: 90ms``` 
``` Compressed time: 111ms``` 
``` Time difference: -21ms``` 
``` Difference %: -23.33% ``` 

### that's part of the encoded output 😂

``` ⬠㘠㤴ਹ††⁩㴫ㄠ⬠㘠〵ਰ††⁩㴫ㄠ⬠㘠〵਱††⁩㴫ㄠ⬠㘠〵ਲ††⁩㴫ㄠ⬠㘠〵ਲ਼††⁩㴫ㄠ⬠㘠〵਴††⁩㴫ㄠ⬠㘠〵ਵ††⁩㴫ㄠ⬠㘠〵ਸ਼††⁩㴫ㄠ⬠㘠〵਷††⁩㴫ㄠ⬠㘠〵ਸ††⁩㴫ㄠ⬠㘠〵ਹ††⁩㴫ㄠ⬠㘠ㄵਰ††⁩㴫ㄠ⬠㘠ㄵ਱††⁩㴫ㄠ⬠㘠ㄵਲ††⁩㴫ㄠ⬠㘠ㄵਲ਼††⁩㴫ㄠ⬠㘠ㄵ਴††⁩㴫ㄠ⬠㘠ㄵਵ††⁩㴫ㄠ⬠㘠ㄵਸ਼††⁩㴫ㄠ⬠㘠ㄵ਷††⁩㴫ㄠ⬠㘠ㄵਸ††⁩㴫ㄠ⬠㘠ㄵਹ††⁩㴫ㄠ⬠㘠㈵ਰ††⁩㴫ㄠ⬠㘠㈵਱††⁩㴫ㄠ⬠㘠㈵ਲ††⁩㴫ㄠ⬠㘠㈵ਲ਼††⁩㴫ㄠ⬠㘠㈵਴††⁩㴫ㄠ⬠㘠㈵ਵ††⁩㴫ㄠ⬠㘠㈵ਸ਼††⁩㴫ㄠ⬠㘠㈵਷††⁩㴫ㄠ⬠㘠㈵ਸ††⁩㴫ㄠ⬠㘠㈵ਹ††⁩㴫ㄠ⬠㘠㌵ਰ††⁩㴫ㄠ⬠㘠㌵਱††⁩㴫ㄠ⬠㘠㌵ਲ††⁩㴫ㄠ⬠㘠㌵ਲ਼††⁩㴫ㄠ⬠㘠㌵਴††⁩㴫ㄠ⬠㘠㌵ਵ††⁩㴫ㄠ⬠㘠㌵ਸ਼††⁩㴫ㄠ⬠㘠㌵਷††⁩㴫ㄠ⬠㘠㌵ਸ††⁩㴫ㄠ⬠㘠㌵ਹ††⁩㴫ㄠ⬠㘠㐵ਰ††⁩㴫ㄠ⬠㘠㐵਱††⁩㴫ㄠ⬠㘠㐵ਲ††⁩㴫ㄠ⬠㘠㐵ਲ਼††⁩㴫ㄠ⬠㘠㐵਴††⁩㴫ㄠ⬠㘠㐵ਵ††⁩㴫ㄠ⬠㘠㐵ਸ਼††⁩㴫ㄠ⬠㘠㐵਷††⁩㴫ㄠ⬠㘠㐵ਸ††⁩㴫ㄠ⬠㘠㐵ਹ††⁩㴫ㄠ⬠㘠㔵ਰ††⁩㴫ㄠ⬠㘠㔵਱††⁩㴫ㄠ⬠㘠㔵ਲ††⁩㴫ㄠ⬠㘠㔵ਲ਼††⁩㴫ㄠ⬠㘠㔵਴††⁩㴫ㄠ⬠㘠㔵ਵ††⁩㴫ㄠ⬠㘠㔵ਸ਼††⁩㴫ㄠ⬠㘠㔵਷††⁩㴫ㄠ⬠㘠㔵ਸ††⁩㴫ㄠ⬠㘠㔵ਹ††⁩㴫ㄠ⬠㘠㘵ਰ††⁩㴫ㄠ⬠㘠㘵਱††⁩㴫ㄠ⬠㘠㘵ਲ††⁩㴫ㄠ⬠㘠㘵ਲ਼††⁩㴫ㄠ⬠㘠㘵਴††⁩㴫ㄠ⬠㘠㘵ਵ††⁩㴫ㄠ⬠㘠㘵ਸ਼††⁩㴫ㄠ⬠㘠㘵਷††⁩㴫ㄠ⬠㘠㘵ਸ††⁩㴫ㄠ⬠㘠㘵ਹ††⁩㴫ㄠ⬠㘠㜵ਰ††⁩㴫ㄠ⬠㘠㜵਱††⁩㴫ㄠ⬠㘠㜵ਲ††⁩㴫ㄠ⬠㘠㜵ਲ਼††⁩㴫ㄠ⬠㘠㜵਴††⁩㴫ㄠ⬠㘠㜵ਵ††⁩㴫ㄠ⬠㘠㜵ਸ਼††⁩㴫ㄠ⬠㘠㜵਷††⁩㴫ㄠ⬠㘠㜵ਸ††⁩㴫ㄠ⬠㘠㜵ਹ††⁩㴫ㄠ⬠㘠㠵ਰ††⁩㴫ㄠ⬠㘠㠵਱††⁩㴫ㄠ⬠㘠㠵ਲ††⁩㴫ㄠ⬠㘠㠵ਲ਼††⁩㴫ㄠ⬠㘠㠵਴††⁩㴫ㄠ⬠㘠㠵ਵ††⁩㴫ㄠ⬠㘠㠵ਸ਼††⁩㴫ㄠ⬠㘠㠵਷††⁩㴫ㄠ⬠㘠㠵ਸ††⁩㴫ㄠ⬠㘠㠵ਹ††⁩㴫ㄠ⬠㘠㤵ਰ††⁩㴫ㄠ⬠㘠㤵਱††⁩㴫ㄠ⬠㘠㤵ਲ††⁩㴫ㄠ⬠㘠㤵ਲ਼††⁩㴫ㄠ⬠㘠㤵਴††⁩㴫ㄠ⬠㘠㤵ਵ††⁩㴫ㄠ⬠㘠㤵ਸ਼††⁩㴫ㄠ⬠㘠㤵਷††⁩㴫ㄠ⬠㘠㤵ਸ††⁩㴫ㄠ⬠㘠㤵ਹ††⁩㴫ㄠ⬠㘠〶ਰ††⁩㴫ㄠ⬠㘠〶਱††⁩㴫ㄠ⬠㘠〶ਲ††⁩㴫ㄠ⬠㘠〶ਲ਼††⁩㴫ㄠ⬠㘠〶਴††⁩㴫ㄠ⬠㘠〶ਵ††⁩㴫ㄠ⬠㘠 ```
