import React from "react";
import { useEffect } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/noteActions";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const MyNotes = ({ search }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/");
    }
  }, [
    dispatch,
    successCreate,
    navigate,
    userInfo,
    successUpdate,
    successDelete,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  return (
    <MainScreen title={` Welcome Back ${userInfo && userInfo.name} .....`}>
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Notes
        </Button>
      </Link>
      {error && <Error variant="danger">{error}</Error>}
      {errorDelete && <Error variant="danger">{errorDelete}</Error>}
      {loading && <Loading />}
      {loadingDelete && <Loading />}
      {notes &&
        notes
          .filter((filteredNote) =>
            filteredNote.title.toLowerCase().includes(search.toLowerCase())
          )
          .reverse()
          .map((note) => (
            <Accordion>
              <Accordion.Item>
                <Card style={{ margin: 10 }} key={note._id}>
                  <Card.Header style={{ display: "flex" }}>
                    <span
                      style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 18,
                      }}
                    >
                      <Accordion.Header>{note.title}</Accordion.Header>
                    </span>

                    <div>
                      <Button href={`/note/${note._id}`}>Edit</Button>
                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => deleteHandler(note._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Header>
                  <Accordion.Body>
                    <Card.Body>
                      <blockquote className="blockquote mb-0">
                        <footer className="" blockquote-footer>
                          <ReactMarkdown>{note.content}</ReactMarkdown>
                          {/* Created on{" "}
                          <cite title="Source Title">
                            {note.createdAt.substring(0, 10)}
                          </cite> */}
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Accordion.Body>
                </Card>
              </Accordion.Item>
            </Accordion>
          ))}
    </MainScreen>
  );
};

export default MyNotes;
