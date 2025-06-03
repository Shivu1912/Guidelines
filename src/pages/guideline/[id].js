import React from 'react';
import { useRouter } from 'next/router';
import SearchHeader from '../../components/Guidelinepage/SearchHeader';
import GuidelineTitle from '../../components/Guidelinepage/GuidelineTitle';
import KeyHighlights from '../../components/Guidelinepage/KeyHighlights';
import SponsorBanner from '../../components/Guidelinepage/SponsorBanner';
import QuestionBar from '../../components/Guidelinepage/QuestionBar';
import WatchSection from  '../../components/Guidelinepage/WatchSection';
import ContemporaryData from  '../../components/Guidelinepage/ContemporaryData';
import AcademicData from  '../../components/Guidelinepage/AcademicData';
import CommentBar from  '../../components/Guidelinepage/CommentBar';
import Footer from '../../components/Layout/Footer'; 

const Guideline = () => {
  const router = useRouter();
  const { id } = router.query; 

  return (
    <>
      <SearchHeader />
      <GuidelineTitle  /> 
      <KeyHighlights  />
      <SponsorBanner />
      <QuestionBar  />
      <WatchSection  />
      <ContemporaryData  />
      <SponsorBanner />
      <AcademicData  />
      <CommentBar  />
      <Footer id={id}/> 
    </>
  );
};

export default Guideline;
