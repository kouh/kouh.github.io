import lume from "lume/mod.ts";

const site = lume();
site.copy("CNAME");
site.copy("assets");

export default site;
