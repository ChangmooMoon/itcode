const request = require('supertest')
const should = require('should')
const app = require('../../')

describe('GET /courses', () => {
  describe('요청 성공시에 ', () => {
    it('과목 목록을 객체로 응답하자', (done) => {
      request(app)
        .get('/courses')
        .end((err, res) => {
          res.body.should.be.instanceOf(Array)
          done()
        })
    })
  })
})

describe('GET /courses/:id', () => {
  describe('요청 성공시', () => {
    it('id가 1인 수업 객체로 응답', (done) => {
      request(app)
        .get('/courses/1')
        .end((end, res) => {
          res.body.should.have.property('id', 1)
          done()
        })
    })
  })
  describe('요청 실패시', () => {
    it('id가 Number가 아닐 때 400 응답', (done) => {
      request(app)
        .get('/courses/one')
        .expect(400)
        .end(done)
    })
    it('해당 id 과목이 없을 때', (done) => {
      request(app)
        .get('/courses/999999')
        .expect(404)
        .end(done)
    })
  })
})

describe('DELETE /courses/:id', () => {
  describe('요청 성공시에', () => {
    it('204로 응답한다',(done) => {
      request(app)
        .delete('/courses/6')
        .expect(204)
        .end(done)
    })
  })
  describe('요청 실패시에', () => {
    it('id가 Number가 아닐 때', (done) => {
      request(app)
        .delete('/courses/six')
        .expect(400)
        .end(done)
    })
  })
})

describe('POST /courses/new-subject', () => {
  describe('요청 성공시에', () => {
    before(done => {
      request(app)
        .post('/courses/new-subject')
        .send({
          title: '타이틀',
          language : 'typescript',
          price : 9900000
        })
        .expect(201)
        .end((err, res) => {
          body = res.body
          done()
        })
    })
    it('생성된 과목 객체 반환', () => {
      body.should.have.property('id')
    })
  })
  describe('요청 실패시', () => {
    it('파라미터 누락했을 때 400 반환', (done) => {
      request(app)
        .post(('/courses/new-subject'))
        .send({})
        .expect(400)
        .end(done)
    })
  })
})

describe('PUT /courses/:id/edit', () => {
  describe('요청 성공시', () => {
    it('변경된 과목으로 응답한다', (done) => {
      const title = '바뀐제목'
      request(app)
        .put('/courses/6/edit')
        .send({
          id: 6,
          title : '바뀐제목',
          language : 'hihihih',
          price : 1234555
        })
        .end((err,res) => {
          res.body.should.have.property('title', title)
          done()
        })
    })
  })
  describe('요청 실패시', () => {
    it('id가 Number가 아닐 때 400 응답', () => {
      request(app)
        .put('/courses/hiroo/edit')
        .send({})
        .expect(400)
        .end(done)
    })
    it('없는 id일 때 404 응답', () => {
      request(app)
        .put('/courses/99999')
        .expect(404)
        .end(done)
    })
    it('수정한 내용이 공백일 때 400 응답', () => {
      request(app)
        .put('/corses/6/edit')
        .send({
          title: '',
          language: 'test',
          price : 1234555
        })
        .expect(400)
        .end(done)
    })
  })
})