import React, {Component} from "react"
import classes from "./QuizList.module.css"
import {NavLink} from "react-router-dom";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchQuizes} from "../../store/actions/quiz";

class QuizList extends Component {

    renderQuizes() {
        return this.props.quizes.map( (quiz) => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={"/quiz/" + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {
        this.props.fetchQuizes()
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов:</h1>

                    {this.props.isLoading && this.props.quizes !== 0
                        ? <Loader />
                        : <ul>
                            {this.renderQuizes()}
                          </ul>}

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        quizes: state.quiz.quizes,
        isLoading: state.quiz.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)