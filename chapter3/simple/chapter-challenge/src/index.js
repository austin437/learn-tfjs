(()=>{
   
    tf.tidy(()=>{
        const telNumbers = [8367677, 4209111, 4209111, 8675309, 8367677];

        const callMeMaybe = tf.tensor(telNumbers)

        console.log(tf.unique(callMeMaybe).values.arraySync())

        return;
    })

   
})()