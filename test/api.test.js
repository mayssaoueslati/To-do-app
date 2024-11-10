const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index.js');

chai.use(chaiHttp);


describe('To-Do API Endpoints', () => {
  
  // Test for GET /
  describe('GET /', () => {
    it('should return a welcome message', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Welcome to the To-Do API');
          done();
        });
    });
  });

  // Add tests for other endpoints here
  // Example: Testing POST /todos
  describe('POST /todos', () => {
    it('should create a new todo', (done) => {
      chai.request(app)
        .post('/todos')
        .send({ title: 'New Task', description: 'Test description' })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('title', 'New Task');
          done();
        });
    });
  });

  // Example: Testing GET /todos
  describe('GET /todos', () => {
    it('should get all todos', (done) => {
      chai.request(app)
        .get('/todos')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
});
