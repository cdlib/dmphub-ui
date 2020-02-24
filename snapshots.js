const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/datasets.html');
  await percySnapshot('Datasets');
});

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/dmp.html');
  await percySnapshot('DMP');
});

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/landing.html');
  await percySnapshot('Landing');
});

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8080/components/preview/project.html');
  await percySnapshot('Project');
});
