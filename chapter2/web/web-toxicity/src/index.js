import "@tensorflow/tfjs";
import * as toxicity from "@tensorflow-models/toxicity";


const checkToxicity = async () => {
  const threshold = 0.5;
  const model = await toxicity.load(threshold);
  const sentences = ["You are a poopy head!", "I like turtles", "Shut up!"];
  const predictions =  await model.classify(sentences);
  console.log(JSON.stringify(predictions, null, 3));
}

checkToxicity();