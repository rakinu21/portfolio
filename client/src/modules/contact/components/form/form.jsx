import './form.scss'

const Form = () => {
  return (
   
    <div class="form-container">
          <form class="form">
            <div class="form-group">
              <label for="email">your name</label>
              <input type="text" id="text" name="text" required="" />
              </div>
              <div class="form-group">
              <label for="email">Email</label>
              <input type="text" id="email" name="email" required="" />
            </div>
            <div class="form-group">
              <label for="textarea">Message....?</label>
              <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
            </div>
            <button class="form-submit-btn" type="submit">Submit</button>
          </form>
        </div>
  )
}

export default Form