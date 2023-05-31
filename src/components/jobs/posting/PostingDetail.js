import React, { useContext, useEffect } from "react";
import "./posting.css";
import PostingDetailCard from "./PostingDetailCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { JobContext, UserContext } from "../../../context";
import { BASE_URL } from "../../util";
import Loading from "../../utils/Loader/Loading";

const PostingDetail = () => {

  const navigate = useNavigate();
  const { jobDetail, setjobDetail, exploreLoading, setexploreLoading } = useContext(JobContext)
  const { id } = useParams()
  const { Token } = useContext(UserContext)

  useEffect(() => {
    const config = {
      headers: { 'x-access-token': Token }
    }
    const getJobDetail = () => {
      setexploreLoading(true)
      axios.get(`${BASE_URL}/api/hr/getSingleJobByID/${id}`, config)
        .then((res) => {
          console.log(res.data.job)
          setjobDetail(res.data.job[0])
          setexploreLoading(false)
        })
        .catch(err => {
          setexploreLoading(false)
          console.log(err.message)
        })
    }

    getJobDetail()
    // eslint-disable-next-line
  }, [])



  const navigateBack = () => {
    navigate(-1);
  }


  return (
    <>
      {exploreLoading ? <Loading /> : <div className="postings-page">
        <div className="postings-heading-container">
          <ArrowBackIcon onClick={navigateBack} sx={{ cursor: "pointer" }} />
          <h3 className="postings-heading">Postings Detail</h3>
        </div>

        <div className="postings_container">
          <PostingDetailCard job={jobDetail} />
        </div>
      </div>}
    </>
  );
};

export default PostingDetail;
