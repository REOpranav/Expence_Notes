import React from 'react'

const AddMember = ({handleChange,handlesubmit,formData}) => {
  return (
    <div>
            <div className="container">
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            name="adminName"
            placeholder="enter name"
            value={formData.adminName}
            onChange={handleChange}
          />
          <br />

          <input
            type="number"
            name="adminAge"
            placeholder="Age"
            value={formData. adminAge}
            onChange={handleChange}
          />
          <br />

          <input
            type="text"
            name="adminSex"
            placeholder="Gender"
            value={formData.adminSex}
            onChange={handleChange}
          />
          <br />
          <button onClick={handlesubmit}>submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddMember
