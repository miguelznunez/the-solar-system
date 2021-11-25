const express = require("express");
const fetch = require("node-fetch");
var faker = require('faker');

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', async (req, res, next) => {
  try{
    let url =
      'https://api.unsplash.com/search/photos?query=galaxy&per_page=9&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    let response = await fetch(url);
    let data = await response.json();
    let image = data.results[8].urls.raw + "&w=1280&h=720";
    res.render("index", { "galaxyUrl": image });
  }catch(err){
    next(err);
  }
});

app.get('/sun', async (req, res, next) => {
  try{
    let url =
      'https://api.unsplash.com/search/photos?query=sun&per_page=13&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    let response = await fetch(url);
    let data = await response.json();
    res.render("sun", { "sunUrl": data.results });
  }catch(err){
    next(err);
  }
});

app.get('/mercury', async (req, res, next) => {
  try{
    let url =
      'https://api.unsplash.com/search/photos?query=mercury&per_page=14&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    let response = await fetch(url);
    let data = await response.json();
    res.render("mercury", { "mercuryUrl": data.results })
  }catch(err){
    next(err);
  }
});

app.get('/venus', async (req, res, next) => {
  try{
    let url =
      'https://api.unsplash.com/search/photos?query=venus&per_page=26&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    let response = await fetch(url);
    let data = await response.json();
    res.render("venus", { "venusUrl": data.results })
  }catch(err){
    next(err);
  }
});

app.get('/earth', async (req, res, next) => {
  try{
    let url =
      'https://api.unsplash.com/search/photos?query=planet_earth&per_page=25&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    let response = await fetch(url);
    let data = await response.json();
    res.render("earth", { "earthUrl": data.results })
  }catch(err){
    next(err);
  }
});

app.get('/mars', async (req, res, next) => {
  try{
    let url = 'https://api.unsplash.com/search/photos?query=mars&per_page=7&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    let response = await fetch(url);
    const data = await response.json();
    res.render("mars", { "marsUrl": data.results })
  }catch(err){
    next(err);
  }
});

app.get('/jupiter', async (req, res, next) => {
  try {
    let url = 'https://api.unsplash.com/search/photos?query=jupiter&per_page=10&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    let response = await fetch(url);
    const data = await response.json();
    res.render("jupiter", { "jupiterUrl": data.results })
  } catch (err) {
    next(err);
  }
});

app.get('/saturn', async (req, res, next) => {
  try{
    let url = 'https://api.unsplash.com/search/photos?query=saturn&per_page=7&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    let response = await fetch(url);
    const data = await response.json();
    res.render("saturn", { "saturnUrl": data.results })
  }catch(err){
    next(err);
  }
});

app.get('/uranus', async (req, res, next) => {
  try{
    let url = 'https://api.unsplash.com/search/photos?query=uranus&per_page=3&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    let response = await fetch(url);
    const data = await response.json();
    res.render("uranus", { "uranusUrl": data.results })
  }catch(err){
    next(err);
  }
});

app.get('/neptune', async (req, res, next) => {
  try{
    let url = 'https://api.unsplash.com/search/photos?query=neptune&per_page=4&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    let response = await fetch(url);
    const data = await response.json();
    res.render("neptune", { "neptuneUrl": data.results })
  }catch(err){
    next(err);
  }
});

app.get('/pluto', async (req, res, next) => {
  try{
    let url = 'https://api.unsplash.com/search/photos?query=pluto&per_page=2&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
    let response = await fetch(url);
    const data = await response.json();
    res.render("pluto", { "plutoUrl": data.results })
  }catch(err){
    next(err);
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));