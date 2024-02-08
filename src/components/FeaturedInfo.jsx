import './featuredInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
  return (
    <>
    
    <div className="featured">
        <div className="fitem">
            <span className='fTitle'>Revanue</span>
            <div className="fMContainer">
                <span className="fMoney">$2,500</span>
                <span className="fmRate">-11.4 <ArrowDownwardIcon className='fNegative'/></span>
            </div>
            <span className="fSub">
                Compared to last month
            </span>
        </div>

        <div className="fitem">
            <span className='fTitle'>Sales</span>
            <div className="fMContainer">
                <span className="fMoney">$4,500</span>
                <span className="fmRate">-1.4 <ArrowDownwardIcon className='fNegative'/></span>
            </div>
            <span className="fSub">
                Compared to last month
            </span>
        </div>

        <div className="fitem">
            <span className='fTitle'>Cost</span>
            <div className="fMContainer">
                <span className="fMoney">$1,500</span>
                <span className="fmRate">+5.4 <ArrowUpwardIcon className='fPositive'/></span>
            </div>
            <span className="fSub">
                Compared to last month
            </span>
        </div>
    </div>
    
    </>
  )
}

export default FeaturedInfo