
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="CERTKEY" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="MemberName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="JuminNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="ID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="PWD" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Grade" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="TEL" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="HP" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="Email" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "certkey",
    "corpNum",
    "memberName",
    "juminNum",
    "id",
    "pwd",
    "grade",
    "tel",
    "hp",
    "email"
})
@XmlRootElement(name = "AddUserToCorp")
public class AddUserToCorp {

    @XmlElement(name = "CERTKEY")
    protected String certkey;
    @XmlElement(name = "CorpNum")
    protected String corpNum;
    @XmlElement(name = "MemberName")
    protected String memberName;
    @XmlElement(name = "JuminNum")
    protected String juminNum;
    @XmlElement(name = "ID")
    protected String id;
    @XmlElement(name = "PWD")
    protected String pwd;
    @XmlElement(name = "Grade")
    protected String grade;
    @XmlElement(name = "TEL")
    protected String tel;
    @XmlElement(name = "HP")
    protected String hp;
    @XmlElement(name = "Email")
    protected String email;

    /**
     * certkey �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCERTKEY() {
        return certkey;
    }

    /**
     * certkey �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCERTKEY(String value) {
        this.certkey = value;
    }

    /**
     * corpNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCorpNum() {
        return corpNum;
    }

    /**
     * corpNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCorpNum(String value) {
        this.corpNum = value;
    }

    /**
     * memberName �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMemberName() {
        return memberName;
    }

    /**
     * memberName �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMemberName(String value) {
        this.memberName = value;
    }

    /**
     * juminNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getJuminNum() {
        return juminNum;
    }

    /**
     * juminNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setJuminNum(String value) {
        this.juminNum = value;
    }

    /**
     * id �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getID() {
        return id;
    }

    /**
     * id �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setID(String value) {
        this.id = value;
    }

    /**
     * pwd �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPWD() {
        return pwd;
    }

    /**
     * pwd �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPWD(String value) {
        this.pwd = value;
    }

    /**
     * grade �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getGrade() {
        return grade;
    }

    /**
     * grade �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setGrade(String value) {
        this.grade = value;
    }

    /**
     * tel �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTEL() {
        return tel;
    }

    /**
     * tel �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTEL(String value) {
        this.tel = value;
    }

    /**
     * hp �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getHP() {
        return hp;
    }

    /**
     * hp �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setHP(String value) {
        this.hp = value;
    }

    /**
     * email �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEmail() {
        return email;
    }

    /**
     * email �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEmail(String value) {
        this.email = value;
    }

}
