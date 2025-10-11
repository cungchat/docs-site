import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  imgSrc: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cài đặt dễ dàng',
    imgSrc: require('@site/static/img/simple-chatbot-setup-interface.jpg').default,
    description: (
      <>
        Cùng Chat cung cấp sẵn các nội dung mẫu theo từng ngành nghề.<br/>
        Bạn chỉ cần chỉnh sửa trên excel để hoàn thiện dữ liệu huấn luyện chatbot AI của bạn.
      </>
    ),
  },
  {
    title: 'Nhận thông báo & tác vụ tức thì',
    imgSrc: require('@site/static/img/real-time-notification-dashboard-with-chat-message.jpg').default,
    description: (
      <>
        Chatbot thu thập thông tin đơn hàng theo yêu cầu của bạn và lên đơn nháp.<br/>
        Nội dung đơn hàng sẽ được gửi ngay về cho bạn.
      </>
    ),
  },
  {
    title: 'An toàn & bảo mật',
    imgSrc: require('@site/static/img/secure-encrypted-chat-conversation-with-shield-and.jpg').default,
    description: (
      <>
        Cùng Chat có cơ chế lọc các nội dung độc hại và tục tĩu trong cuộc hội thoại với khách hàng.<br/>
        Cùng Chat cam kết đảm bảo an toàn & riêng tư mọi dữ liệu của bạn.
      </>
    ),
  },
];

function Feature({title, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={'mb-6 h-64 w-full overflow-hidden rounded-lg'}
             style={{borderRadius: '8px', height: '384px', overflow: 'hidden'}} alt={title} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
