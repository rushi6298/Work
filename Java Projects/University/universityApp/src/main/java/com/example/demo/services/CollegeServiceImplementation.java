package com.example.demo.services;

import java.util.List;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.example.demo.entity.College;
import com.example.demo.entity.RequestUniversityOBJ;
import com.example.demo.entity.University;
import com.example.demo.repository.CollegeRepository;
import com.example.demo.repository.UniversityRepository;

@Service
public class CollegeServiceImplementation implements CollegeService {
	@Autowired
	private CollegeRepository crepo;

	@Autowired
	private UniversityRepository urepo;

	@Override
	public List<College> getAllCollege() {
		// TODO Auto-generated method stub
		return crepo.findAll();
	}

	// No More Use
	@Override
	public List<College> getCollegeByUid(Integer id) {

		return crepo.getCollegeByUid(id);
	}

	@Override
	public College updateCollege(College college) {
		validateCollege(college);
		College existingCollege = crepo.findById(college.getCid()).orElse(null);
		if (existingCollege != null) {
			existingCollege.setCname(college.getCname());
			existingCollege.setCaddress(college.getCaddress());
			existingCollege.setEmail(college.getEmail());
			existingCollege.setPhonenumber(college.getPhonenumber());
			existingCollege.setRating(college.getRating());
			return crepo.save(existingCollege);
		}
		return null;
	}

	@Override
	public College createCollege(College college, Integer uid) {
		validateCollege(college);
		if (uid != null) {
			University university = urepo.findById(uid).orElse(null);
			if (university != null) {
				college.setUniversity(university);
			}
		}
		return crepo.save(college);
	}

	@Override
	public void deleteCollege(Integer cid) {

		crepo.deleteById(cid);

	}

	@Override
	public List<College> getAllcollegesByCriteria(RequestUniversityOBJ req) {

		if (req.getCid() != null && req.getCid() == 0) {
			req.setCid(null);
		}
		if (req.getCaddress() != null && req.getCaddress().isEmpty()) {
			req.setCaddress(null);
		}
		return crepo.getAllCollegesByCriteria(req.getUid(), req.getCid(), req.getCaddress());
	}

	@Override
	public Page<College> getAllcollegesByCriteriaWithPagination(RequestUniversityOBJ req, int page, int pageSize) {
		PageRequest pageRequest = PageRequest.of(page, pageSize);
		if (req.getCid() != null && req.getCid() == 0) {
			req.setCid(null);
		}
		if (req.getCaddress() != null && req.getCaddress().isEmpty()) {
			req.setCaddress(null);
		}

		return crepo.getAllCollegesByCriteriaWithPagination(req.getUid(), req.getCid(), req.getCaddress(), pageRequest);
	}
	
	private static final String NAME_REGEX = "^[A-Za-z ]+$";
    private static final String ADDRESS_REGEX = "^[A-Za-z0-9,\\- ]+$";
    private static final String EMAIL_REGEX = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
    private static final String PHONE_REGEX = "^[0-9]{10}$"; 
    private static final String GRADE_REGEX = "^[A-D]$"; 

    public void validateCollege(College college) {
        if (isBlank(college.getCname()) || !Pattern.matches(NAME_REGEX, college.getCname())) {
            throw new IllegalArgumentException("Invalid college name");
        }
        if (isBlank(college.getCaddress()) || !Pattern.matches(ADDRESS_REGEX, college.getCaddress())) {
            throw new IllegalArgumentException("Invalid college address");
        }
        if (isBlank(college.getEmail()) || !Pattern.matches(EMAIL_REGEX, college.getEmail())) {
            throw new IllegalArgumentException("Invalid email address");
        }
        if (isBlank(college.getPhonenumber()) || !Pattern.matches(PHONE_REGEX, college.getPhonenumber())) {
            throw new IllegalArgumentException("Invalid phone number");
        }
        
        if (college.getUniversity() == null || college.getUniversity().getUid() == null) {
            throw new IllegalArgumentException("University ID cannot be null");
        }
    }

    private boolean isBlank(String value) {
        return value == null || value.trim().isEmpty();
    }

}
