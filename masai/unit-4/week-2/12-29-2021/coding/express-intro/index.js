const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/web13");
};

// USER SCHEMA AND MODEL
const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true },
    gender: { type: String, required: false, default: "Male" },
    age: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema); // user => users, users => User

// TAGS SCHEMA AND MODEL
const tagSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Tag = mongoose.model("tag", tagSchema); // tag => tags

// POST SCHEMA AND MODEL
const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    tag_ids: [
      { type: mongoose.Schema.Types.ObjectId, ref: "tag", required: true },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema); // post => posts

// COMMENT SCHEMA AND MODEL
const commentSchema = new mongoose.Schema(
  {
    reply: { type: String, required: true },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Comment = mongoose.model("comment", commentSchema); // comment => comments

const app = express();

app.use(express.json());

/* ------- REST API CRUD for user
  get /users => get all users -- DONE
  post /users => create a user
  get /users/:id => get a single user
  patch /users/:id => update a single user
  delete /users/:id => delete a single user
*/
// ------------------ Users CRUD --------------------------------
app.get("/users", async (req, res) => {
  try {
    const users = await User.find().lean().exec(); // db.users => mongoose object => json object thennable
    return res.send(users);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.listen(2345, async () => {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (e) {
    console.log(e.message);
  }
});
