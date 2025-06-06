import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SearchHeader from '../../components/Guidelinepage/SearchHeader';
import GuidelineTitle from '../../components/Guidelinepage/GuidelineTitle';
import KeyHighlights from '../../components/Guidelinepage/KeyHighlights';
import SponsorBanner from '../../components/Guidelinepage/SponsorBanner';
import QuestionBar from '../../components/Guidelinepage/QuestionBar';
import WatchSection from '../../components/Guidelinepage/WatchSection';
import ContemporaryData from '../../components/Guidelinepage/ContemporaryData';
import AcademicData from '../../components/Guidelinepage/AcademicData';
import CommentBar from '../../components/Guidelinepage/CommentBar';
import Footer from '../../components/Layout/Footer';
import Loader from '../../components/Layout/Loader';

const Guideline = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/guideline/${id}`)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            setData(json.result);
          } else {
            console.error('No data found');
          }
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching guideline:', err);
          setLoading(false);
        });
    }
  }, [id]);

   if (loading) return <Loader />;
  if (!data) return <p>Guideline not found</p>;


  return (
    <>
      <SearchHeader />
      <GuidelineTitle data={data} />
      <KeyHighlights data={data} />
      <SponsorBanner data={data} />
      <QuestionBar data={data} />
      <WatchSection data={data} />
      <ContemporaryData data={data} />
      <SponsorBanner data={data} />
      <AcademicData data={data} />
      <CommentBar data={data} />
      <Footer id={id} />
    </>
  );
};

export default Guideline;

