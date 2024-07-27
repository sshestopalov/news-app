import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 600 }); // 10 mins (600 seconds)

export default cache;
