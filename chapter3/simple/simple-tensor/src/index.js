(()=>{
    console.log('first tensor');
    const dataArray = [8, 6, 7, 5, 'here', 0, 9];
    const first = tf.tensor(dataArray, null, 'int32');
    //console.log(first);

    const firstAgain = tf.tensor1d(dataArray);
    //console.log(firstAgain);

    const guess = tf.tensor([true, false, true], null, 'int32');

    const guessAgain = tf.tensor([1, 3.141592654, false]);

    const second = tf.tensor1d([8, 6, 7, 5, 3, 0, 9]);

    //will fail
    try {
        const nope = tf.tensor1d([[1], [2]]);
    } catch (e) {
        console.log('Negative');
    }

    console.log('Rank:', second.rank)
    console.log('Size:', second.size)
    console.log('Data type:', second.dtype)

})()