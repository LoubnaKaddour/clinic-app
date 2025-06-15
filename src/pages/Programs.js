import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Rating,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const programsData = [
  {
    title: 'برنامج علاج السكري',
    description: 'متابعة دقيقة للسكري بإشراف أطباء مختصين، مع نظام غذائي مصمم حسب الحالة.',
    image: 'https://source.unsplash.com/400x300/?diabetes,clinic',
  },
  {
    title: 'برنامج علاج ارتفاع الضغط',
    description: 'متابعة يومية لضغط الدم، مع برامج رياضية خاصة للمرضى كبار السن.',
    image: 'https://source.unsplash.com/400x300/?blood-pressure,clinic',
  },
  {
    title: 'برنامج طب الشيخوخة',
    description: 'رعاية شاملة صحية ونفسية للمسنين، تشمل العلاج الفيزيائي والتغذية.',
    image: 'https://source.unsplash.com/400x300/?elderly,care',
  },
];

const tabsContent = [
  { label: 'أمراض مزمنة', content: 'نغطي السكري، الضغط، الكولسترول، وغيرها من الأمراض المزمنة.' },
  { label: 'صحة القلب', content: 'برامج متابعة القلب مع أحدث الأجهزة والتخطيط.' },
  { label: 'علاج طبيعي', content: 'جلسات موجهة لعلاج الآلام والتصلب وتصلح بعد العمليات الجراحية.' },
  { label: 'صحة المرأة', content: 'برنامج شامل لرعاية المرأة الحامل والمصابة باضطرابات هرمونية.' },
];

const faqs = [
  {
    question: 'هل البرامج موجهة فقط لكبار السن؟',
    answer: 'لا، معظم برامجنا تستهدف جميع الأعمار مع تخصيص برامج لكبار السن.',
  },
  {
    question: 'هل يمكنني الاستفادة من البرنامج دون زيارة العيادة؟',
    answer: 'نعم، بعض البرامج تقدم زيارات منزلية أو استشارات عن بُعد.',
  },
];

const testimonials = [
  {
    name: 'خديجة منصوري',
    comment: 'استفدت كثيرًا من برنامج علاج السكري، الطاقم متعاون جدًا.',
    rating: 5,
  },
  {
    name: 'علي زروال',
    comment: 'برنامج القلب ممتاز، وأشكر الطبيب على المتابعة الدقيقة.',
    rating: 4,
  },
];

function Programs() {
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (e, newValue) => {
    setTab(newValue);
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h3" align="center" color="primary" gutterBottom>
        برامج العيادة العلاجية
      </Typography>

      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        نقدم برامج علاجية شاملة ومتكاملة تساعد المريض على التعافي بطريقة فعالة ومستدامة، بإشراف أطباء متخصصين.
      </Typography>

      {/* البطاقات */}
      <Grid container spacing={4}>
        {programsData.map((prog, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardMedia component="img" height="200" image={prog.image} alt={prog.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>{prog.title}</Typography>
                <Typography variant="body2">{prog.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* الجدول */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>تفاصيل البرامج</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>البرنامج</TableCell>
              <TableCell>الفئة المستهدفة</TableCell>
              <TableCell>مدة البرنامج</TableCell>
              <TableCell>السعر</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>علاج السكري</TableCell>
              <TableCell>كافة الأعمار</TableCell>
              <TableCell>3 أشهر</TableCell>
              <TableCell>10000 دج</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>علاج الضغط</TableCell>
              <TableCell>أكثر من 40 سنة</TableCell>
              <TableCell>شهرين</TableCell>
              <TableCell>8000 دج</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>طب الشيخوخة</TableCell>
              <TableCell>60 سنة فما فوق</TableCell>
              <TableCell>دائم</TableCell>
              <TableCell>حسب الحالة</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      {/* التبويبات */}
      <Box sx={{ mt: 6 }}>
        <Tabs value={tab} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
          {tabsContent.map((tabItem, idx) => (
            <Tab key={idx} label={tabItem.label} />
          ))}
        </Tabs>
        <Box sx={{ mt: 2 }}>
          <Typography>{tabsContent[tab].content}</Typography>
        </Box>
      </Box>

      {/* الأسئلة الشائعة */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>الأسئلة الشائعة</Typography>
        {faqs.map((item, i) => (
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* الشهادات */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>آراء مرضانا</Typography>
        <Grid container spacing={3}>
          {testimonials.map((test, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar>{test.name.charAt(0)}</Avatar>
                <Box>
                  <Typography variant="subtitle1">{test.name}</Typography>
                  <Rating value={test.rating} readOnly />
                  <Typography variant="body2">{test.comment}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* الفيديو */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>فيديو توعوي</Typography>
        <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src="https://www.youtube.com/embed/pz8R5LzBNwA"
            title="برنامج صحي"
            frameBorder="0"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </Box>
      </Box>

    </Container>
  );
}

export default Programs;
