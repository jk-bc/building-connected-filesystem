import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchRFP as fetchRFPAction} from './userActions';

export const DirectoryTable = ({directories, files, fetchRFP}) => {

  useEffect(() => {
    fetchRFP();
  }, [fetchRFP]);

  return (
    <div className='container'>
    </div>
  );
};

const mapStateToProps = ({rfp}) => ({
  ...rfp
});

const mapDispatchToProps = {fetchRFP: fetchRFPAction};

export default connect(mapStateToProps, mapDispatchToProps)(Users);