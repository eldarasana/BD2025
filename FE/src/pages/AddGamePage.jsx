import { useState } from 'react';
import Save from '../components/buttons/Save';

export default function AddGame() {
  const [user_obj_state, set_user_obj_state] = useState({
    title: '',
    genre: '',
    releaseDate: 2010,
  });

  return (
    <>
      <div className="h1-wrapper-wrapper">
        <h1 className="h1-wrapper">ADD GAME PAGE</h1>
      </div>
      <div className="add-user-form-wrapper">
        <div className="simple-input-wrapper">
          <div className="input-group">
            <input
              required
              type="text"
              name="title"
              autoComplete="off"
              className="input"
              onChange={(e) =>
                set_user_obj_state((state) => ({ ...state, title: e.target.value }))
              }
              value={user_obj_state.title}
            />
            <label className="user-label">Title</label>
          </div>
        </div>
        <div className="simple-input-wrapper">
          <div className="input-group">
            <input
              required
              type="text"
              name="genre"
              autoComplete="off"
              className="input"
              onChange={(e) =>
                set_user_obj_state((state) => ({ ...state, genre: e.target.value }))
              }
              value={user_obj_state.genre}
            />
            <label className="user-label">Genre</label>
          </div>
        </div>
        <div className="age_part_wrapper">
          <label className="num_change_label">Release date</label>
          <div className="plus-minus-wrapper">
            <div className="rgb-container-wrapper">
              <div className="rgb-container">
                <button
                  onClick={() =>
                    set_user_obj_state((state) => ({
                      ...state,
                      releaseDate: state.releaseDate + 1,
                    }))
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className="span-wrapper">
              <span>{user_obj_state.releaseDate}</span>
            </div>
            <div className="rgb-container-wrapper">
              <div className="rgb-container">
                <button
                  onClick={() =>
                    set_user_obj_state((state) => ({
                      ...state,
                      releaseDate: state.releaseDate - 1,
                    }))
                  }
                >
                  -
                </button>
              </div>
            </div>
            <Save obj_state={user_obj_state} type="games" />
          </div>
        </div>
      </div>
    </>
  );
}