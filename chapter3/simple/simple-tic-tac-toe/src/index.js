(() => {
    console.log('tic tac toe tensor');

    const a = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0])

    const b = tf.tensor([[1, 0, 0], [0, -1, 0], [1, 0, 0]])

    const c = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3])

    const d = tf.tensor([1, 0, 0, 0, -1, 0, 1, 0, 0], [3, 3], 'int32')

})()