/* Ta định nghĩa một dãy là đẹp khi dãy đó có tổng chia hết cho 9. 
Cho một mảng arr gồm các số nguyên được xếp thành một vòng tròn. 
Hãy tìm dãy con liên tiếp và đẹp có tổng lớn nhất. 
Trả về tổng của dãy đó, nếu không tồn tại dãy nào như vậy trả về -1.

Ví dụ:
Với arr = [-3,5,-4,7] thì maxSumOfBeautifulSubarray(arr) = 9 .
*/
function maxSumOfBeautifulSubarray(arr){
    let arr1 = [];
    let n = arr.length ;
    for (let i = 0 ; i < n;i++){
        let sum = 0
        let j = i;
        let check = 0;
        while (check < n){
            if (j == n){
                j = 0
            }
            sum += arr[j];
            if (sum%9==0){
                arr1.push(sum)
            }
            j++
            check++
        }
    }
    console.log(arr1)
    if (arr1.length > 0){
        return Math.max.apply(Math,arr1);
    }else{
        return -1
    }
}